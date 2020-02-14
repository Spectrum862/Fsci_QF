from django.db import models
from django.contrib.auth.models import User

# student model
class Student(models.Model):
    studentID = models.CharField(max_length = 11, unique = True, primary_key = True)
    firstname = models.CharField(max_length = 100)
    lastname = models.CharField(max_length = 100)
    gender = models.CharField(max_length = 6) # male or female
    degree_of_study = models.CharField(max_length = 30)
    year_of_study = models.PositiveSmallIntegerField() # 1, 2, 3, 4, 5
    faculty = models.CharField(max_length = 100)
    department = models.CharField(max_length = 100)
    field_of_study = models.CharField(max_length = 100)
    GPAX = models.DecimalField(max_digits = 3, decimal_places = 2)
    #owner = models.ForeignKey(User, related_name = "students", on_delete = models.CASCADE, null = True)
    # isn't done yet
