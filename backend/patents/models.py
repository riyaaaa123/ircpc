from django.db import models

# Create your models here.
class Person(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Patent(models.Model):
     title = models.CharField(max_length=300)
     description = models.TextField()
     inventors = models.ManyToManyField('Person', related_name='patents_as_inventor')
     principal_investigator = models.ForeignKey('Person', on_delete=models.SET_NULL, null=True, related_name='patents_as_principal_investigator')
     filing_date = models.DateField()
     publication_date = models.DateField(blank=True, null=True)
     is_granted = models.BooleanField(default=False)

     def __str__(self):
        return self.title