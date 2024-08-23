from django.db import models

class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.company}"

class ExperienceImage(models.Model):
    experience = models.ForeignKey(Experience, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='experience_images/')

    def __str__(self):
        return f"Image for {self.experience.role} at {self.experience.company}"