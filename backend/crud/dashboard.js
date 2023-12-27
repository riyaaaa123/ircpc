const express = require('express');
const Profile = require('../schema/Profile');
const router = express.Router();
const Patents = require('../schema/Patents');

router.post('/addpatents', async (req, res) => {
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
      });
  
      res.json(savedPatent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });

  router.put('/updatepatent/:id', async (req, res) => {
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
      } = req.body;
  
      // Create a newPatent object
      const newPatent = {};
      if (title) { newPatent.title = title };
      if (fieldOfInvention) { newPatent.fieldOfInvention = fieldOfInvention };
      if (background) { newPatent.background = background };
      if (summary) { newPatent.summary = summary };
      if (drawings) { newPatent.drawings = drawings };
      if (detailedDescription) { newPatent.detailedDescription = detailedDescription };
      if (claims) { newPatent.claims = claims };
      if (inventor) { newPatent.inventor = inventor };
      if (references) { newPatent.references = references };
      if (acknowledgments) { newPatent.acknowledgments = acknowledgments };
  
      // Find the patent to be updated and update it
      let patent = await Patents.findById(req.params.id);
      if (!patent) { return res.status(404).send("Not Found") }
  
      // Add any additional conditions for authorization if needed
      // For example, you might want to check if the user making the request has the right permissions
  
      updatedPatent = await Patents.findByIdAndUpdate(req.params.id, { $set: newPatent }, { new: true });
      res.json({ updatedPatent });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });

router.post('/addprofile', async (req, res) => {
        try {
            const { age, gender, mobile } = req.body;
            const savedProfile = await Profile.create({
                age: age,
                gender: gender,
                mobile: mobile,
                user: req.header('id'),
              });

            res.json(savedProfile)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error");
        }
    })

    router.put('/updateprofile/:id', async (req, res) => {
        const { age, gender, mobile } = req.body;
       
            // Create a newProfile object
            const newProfile = {};
            if (age) { newProfile.age = age };
            if (gender) { newProfile.gender = gender };
            if (mobile) { newProfile.mobile = mobile };
    
            // Find the note to be updated and update it
            let profile = await Profile.findById(req.params.id);
            if (!profile) { return res.status(404).send("Not Found") }
    
            if (profile.user.toString() !== req.header('id')) {
                return res.status(401).send("Not Allowed");
            }
            updatedprofile = await Profile.findByIdAndUpdate(req.params.id, { $set: newProfile }, { new: true })
            res.json({ updatedprofile });
     
    })
    

module.exports =router