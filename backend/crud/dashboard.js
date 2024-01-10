const express = require("express");
const Profile = require("../schema/Profile");
const router = express.Router();
const Patents = require("../schema/Patents");
const jwt = require("jsonwebtoken");
const { sendMail } = require("../utils/sendmail");


router.get("/getpatents", async (req, res) => {
  try {
    const allPatents = await Patents.find();
// filter according to users bad me laga denge
    res.json(allPatents);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/addpatents", async (req, res) => {
  try {
    const {
      title,
      fieldOfInvention,
      background,
      summary,
      drawings,
      detailedDescription,
      claims,
      inventor,
      references,
      acknowledgments,
      committeeMembers,
    } = req.body;

    const savedPatent = await Patents.create({
      title,
      fieldOfInvention,
      background,
      summary,
      drawings,
      detailedDescription,
      claims,
      inventor,
      references,
      acknowledgments,
      committeeMembers,
    });
    const receiverEmail = "jindalriyaaa@gmail.com";
    const senderEmail = "riyajindal769@gmail.com";
    const emailSubject = "Patent is added";
    const emailMessage =
      "Congratulations! You have successfully added your patent claim";

    await sendMail(receiverEmail, senderEmail, emailSubject, emailMessage);
    const receiverEmail1 = "k_shaw@ph.iitr.ac.in";
    const emailMessage1 = "Someone has added a patent claim, please visit the website to verify"
    await sendMail(receiverEmail1, senderEmail,emailSubject, emailMessage1)

    res.json(savedPatent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.put("/updatepatent/:id", async (req, res) => {
  try {
    const {
      title,
      fieldOfInvention,
      background,
      summary,
      drawings,
      detailedDescription,
      claims,
      inventor,
      references,
      acknowledgments,
      committeeMembers,
    } = req.body;

    // Create a newPatent object
    const newPatent = {};
    if (title) {
      newPatent.title = title;
    }
    if (fieldOfInvention) {
      newPatent.fieldOfInvention = fieldOfInvention;
    }
    if (background) {
      newPatent.background = background;
    }
    if (summary) {
      newPatent.summary = summary;
    }
    if (drawings) {
      newPatent.drawings = drawings;
    }
    if (detailedDescription) {
      newPatent.detailedDescription = detailedDescription;
    }
    if (claims) {
      newPatent.claims = claims;
    }
    if (inventor) {
      newPatent.inventor = inventor;
    }
    if (references) {
      newPatent.references = references;
    }
    if (acknowledgments) {
      newPatent.acknowledgments = acknowledgments;
    }
    if (committeeMembers) {
      newPatent.committeeMembers = committeeMembers;
    }

    // Find the patent to be updated and update it
    let patent = await Patents.findById(req.params.id);
    if (!patent) {
      return res.status(404).send("Not Found");
    }

    // Add any additional conditions for authorization if needed
    // For example, you might want to check if the user making the request has the right permissions

    updatedPatent = await Patents.findByIdAndUpdate(
      req.params.id,
      { $set: newPatent },
      { new: true }
    );
    const receiverEmail = "jindalriyaaa@gmail.com";
    const senderEmail = "riyajindal769@gmail.com";
    const emailSubject = "Patent is updated";
    const emailMessage =
      "Congratulations! You have successfully updated your patent claim";

    await sendMail(receiverEmail, senderEmail, emailSubject, emailMessage);
    res.json({ updatedPatent });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.post("/addprofile", async (req, res) => {
  try {
    const { age, gender, mobile } = req.body;
    const savedProfile = await Profile.create({
      age: age,
      gender: gender,
      mobile: mobile,
      user: req.header("id"),
    });

    res.json(savedProfile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

router.put("/updateprofile/:id", async (req, res) => {
  const { age, gender, mobile } = req.body;

  // Create a newProfile object
  const newProfile = {};
  if (age) {
    newProfile.age = age;
  }
  if (gender) {
    newProfile.gender = gender;
  }
  if (mobile) {
    newProfile.mobile = mobile;
  }

  // Find the note to be updated and update it
  let profile = await Profile.findById(req.params.id);
  if (!profile) {
    return res.status(404).send("Not Found");
  }

  if (profile.user.toString() !== req.header("id")) {
    return res.status(401).send("Not Allowed");
  }
  updatedprofile = await Profile.findByIdAndUpdate(
    req.params.id,
    { $set: newProfile },
    { new: true }
  );
  res.json({ updatedprofile });
});
router.put(
  "/approvecommittee/:patentId/:committeeMemberId",
  async (req, res) => {
    try {
      const { approved , name, email, department } = req.body;
      const { patentId, committeeMemberId } = req.params;

      const patent = await Patents.findById(patentId);
      if (!patent) {
        return res.status(404).send("Patent not found");
      }
      const committeeMember = patent.committeeMembers.id(committeeMemberId);
      if (!committeeMember) {
        return res.status(404).send("Committee member not found");
      }
        if (name) committeeMember.name = name;
        if (email) committeeMember.email = email;
        if (department) committeeMember.department = department;
        if (approved !== undefined) {
        committeeMember.approved = approved;
        if(approved==true) {
           const tokenPayload = {
             patentId: patent._id,
             committeeMemberId: committeeMember._id,
           };

           const token = jwt.sign(tokenPayload, "secretKey", {
             expiresIn: "72h",
           });
          
          const receiverEmail = committeeMember.email;
          const senderEmail = "riyajindal769@gmail.com"; 
          const emailSubject = "Invitation to Join Committee";
          const acceptLink = `http://localhost:5000/api/profiles/accept-invite/${token}`;
          const rejectLink = `http://localhost:5000/api/profiles/reject-invite/${token}`;
          const emailMessage = `You have been approved to join the committee. Click the following link to accept or reject the invitation:\n\nAccept: ${acceptLink}\nReject: ${rejectLink}`;
          await sendMail(receiverEmail, senderEmail, emailSubject, emailMessage);
      }}
        await patent.save();
      res.json({ committeeMember });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
router.get('/accept-invite/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, "secretKey");
    const patentId = decoded.patentId;
    const committeeMemberId = decoded.committeeMemberId;
    const patent = await Patents.findById(patentId);
    if (!patent) {
      return res.status(404).send("Patent not found");
    }
    const committeeMember = patent.committeeMembers.id(committeeMemberId);
    if (!committeeMember) {
      return res.status(404).send("Committee member not found");
    }
      committeeMember.joined = true;
        await committeeMember.save();
        res.send("Invitation accepted successfully!");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }});
  router.get("/reject-invite/:token", async (req, res) => {
    try {
    const { token } = req.params;
    const decoded = jwt.verify(token, "secretKey");
    const patentId = decoded.patentId;
    const committeeMemberId = decoded.committeeMemberId;
    const patent = await Patents.findById(patentId);
    if (!patent) {
      return res.status(404).send("Patent not found");
    }
    const committeeMember = patent.committeeMembers.id(committeeMemberId);
    if (!committeeMember) {
      return res.status(404).send("Committee member not found");
    }
      committeeMember.joined = false;
        await committeeMember.save();
        res.send("Invitation rejected!");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
  });
  

module.exports = router;
