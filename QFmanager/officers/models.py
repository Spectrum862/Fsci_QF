from django.db import models

# Officer model
class Officer(models.Model):

    # isn't done yet.

    officerID = models.CharField(max_length = 30, unique = True)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    gender = models.CharField(max_length = 6)
    faculty = models.CharField(max_length = 100)
    department = models.CharField(max_length = 100) # 'no' as none