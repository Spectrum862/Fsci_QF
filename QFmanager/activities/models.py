from django.db import models

# Activity model 
class Activity(models.Model):

    # isn't done yet.

    year = models.PositiveSmallIntegerField() # education year
    semester = models.PositiveSmallIntegerField()
    act_rank = models.CharField() # activity rank ,which consists of nation, university, club, department, and between institutions.
    act_type = models.CharField() # activity type
    act_name_th = models.CharField(max_length = 200) # activity name in Thai
    act_name_en = models.CharField(max_length = 200) # activity name in English
    department = models.CharField() # activity department