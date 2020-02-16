from django.db import models
from django.contrib.auth.models import User

# Advisor model
class Advisor(models.Model):
    AdvisorID = models.CharField(max_length = 30, unique = True, primary_key = True)
    academic_rank = models.CharField(max_length = 20)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    gender = models.CharField(max_length = 6)
    faculty = models.CharField(max_length = 100)
    department = models.CharField(max_length = 100)
    year_advisor = models.PositiveSmallIntegerField() # no as 0, 1, 2, 3, 4, 5
    #owner = models.ForeignKey(User, related_name = "advisors", on_delete = models.CASCADE, null = True)