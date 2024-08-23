from django.contrib import admin
from .models import Experience, ExperienceImage

class ExperienceImageInline(admin.TabularInline):
    model = ExperienceImage
    extra = 1

class ExperienceAdmin(admin.ModelAdmin):
    inlines = [ExperienceImageInline]

admin.site.register(Experience, ExperienceAdmin)
admin.site.register(ExperienceImage)