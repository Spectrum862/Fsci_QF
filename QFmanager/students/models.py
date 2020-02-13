from django.db import models
from django.contrib.auth.models import User

# student's information model
class Student(models.Model):
    studentID = models.CharField(max_length = 11, unique = True)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    faculty = models.CharField(max_length = 100)
    year_of_study = models.PositiveSmallIntegerField()
    department = models.CharField(max_length = 100)
    field_of_study = models.CharField(max_length = 100)
    GPAX = models.DecimalField(max_digits = 3, decimal_places = 2)
    #owner = models.ForeignKey(User, related_name = "students", on_delete = models.CASCADE, null = True)
    # isn't done yet
