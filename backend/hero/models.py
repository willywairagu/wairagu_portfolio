from django.db import models


class Hero(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.title

# class Hero(models.Model):
#   title = models.CharField(max_length=200)
#   subtitle = models.CharField(max_length=300)
#   description = models.CharField(max_length=500)
#   image = models.ImageField(upload_to='images')
  
#   class Meta:
#     verbose_name = 'Hero'
#     verbose_name_plural = 'Hero'
    
#   def __str__(self):
#     return '{0} {1}'.format(self.title, self.subtitle)