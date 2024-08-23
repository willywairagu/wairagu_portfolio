from rest_framework import serializers
from .models import Experience, ExperienceImage

class ExperienceImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ExperienceImage
		fields = ['image']

class ExperienceSerializer(serializers.ModelSerializer):
	images = ExperienceImageSerializer(many=True, read_only=True)

	class Meta:
		model = Experience
		fields = '__all__'