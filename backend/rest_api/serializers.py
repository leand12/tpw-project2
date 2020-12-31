from rest_api.models import Tag
from rest_framework import serializers


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name', 'is_popular']