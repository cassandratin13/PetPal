from django.db import models
from accounts.models.ShelterModel import Shelter
from django.utils import timezone

class PetDetail(models.Model):

    status_choices = [
        ('Available', 'Available'),
        ('Adopted', 'Adopted'),
        ('Pending', 'Pending'),
        ('Withdrawn', 'Withdrawn'),
    ]

    gender_choices = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    size_choices = [
        ('Small', 'Small'),
        ('Medium', 'Medium'),
        ('Large', 'Large'),
    ]

    behaviour_choices = [
        ('Friendly', 'Friendly'),
        ('Shy', 'Shy'),
        ('Aggressive', 'Aggressive'),
    ]

    pet_type_choices = [
        ('Cat', 'Cat'),
        ('Dog', 'Dog'),
        ('Aquatic', 'Aquatic'),
        ('Birds', 'Birds'),
    ]

    shelter = models.ForeignKey(Shelter, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    status = models.CharField(max_length=20, choices=status_choices, default='Available')
    gender = models.CharField(max_length=20, choices=gender_choices)
    age = models.PositiveIntegerField(default=0)
    colour = models.CharField(max_length=20)
    type = models.CharField(max_length=20, choices=pet_type_choices)
    location = models.CharField(max_length=30)
    size = models.CharField(max_length=20, choices=size_choices)
    behaviour = models.CharField(max_length=20, choices=behaviour_choices)
    description = models.TextField(blank=True, null=True)
    medical_history = models.TextField(blank=True, null=True)
    deadline = models.DateField(default=timezone.now)
    pet_image_1 = models.ImageField(upload_to='pets/')



