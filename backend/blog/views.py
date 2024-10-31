from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Blogpost
from .serializers import BlogpostSerializer

# Create your views here.
class BlogPostListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Blogpost.objects.all().order_by("-created_at")
    serializer_class = BlogpostSerializer
    pagination_class = None


class BlogPostDetailView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer