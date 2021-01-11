
from django.contrib.auth.models import User

from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from rest_api.models import Tag, Article, Item, Game, Console
from rest_framework import serializers


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField(required=True, write_only=True)
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    first_name = serializers.CharField(required=True, write_only=True)
    last_name = serializers.CharField(required=True, write_only=True)
    password1 = serializers.CharField(required=True, write_only=True)
    password2 = serializers.CharField(required=True, write_only=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    "A user is already registered with this e-mail address.")
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(
                "The two password fields didn't match.")
        return data

    def get_cleaned_data(self):
        data = {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
        }
        return data

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user


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
            'shop_cart', 'saved', 'seller', 'buyer', 'items_in_article')


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

