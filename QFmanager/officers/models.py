from django.db import models

# Officer model
class Officer(models.Model):
    officerID = models.CharField(max_length = 30, unique = True, primary_key = True)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    gender = models.CharField(max_length = 6)
    faculty = models.CharField(max_length = 100)
    department = models.CharField(max_length = 100) # 'None' as none
    #owner = models.ForeignKey(User, related_name = "officers", on_delete = models.CASCADE, null = True)