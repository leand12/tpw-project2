from django.contrib.auth.models import User

from rest_api.models import Tag, Article, Item, Game, Console
from rest_framework import serializers


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('name', 'is_popular')


class ArticleSerializer(serializers.ModelSerializer):
    # user = serializers.StringRelatedField(many=False)
    class Meta:
        model = Article
        fields = (
            'id', 'name', 'total_price', 'description', 'shipping_fee', 'date_posted', 'tag', 'is_sold', 'times_viewed',
            'shop_cart', 'saved', 'seller', 'buyer')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'id2', 'price', 'name', 'image', 'condition', 'pertaining_article')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'id2', 'price', 'name', 'image', 'condition', 'pertaining_article', 'release_year', 'publisher',
                  'genre', 'rating', 'platform')


class ConsoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Console
        fields = ('id', 'id2', 'price', 'name', 'image', 'condition', 'pertaining_article', 'release_year', 'brand',
                  'storage_capacity', 'color')

