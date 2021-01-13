from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_api.serializers import TagSerializer, ArticleSerializer, UserSerializer, ItemSerializer, GameSerializer, \
    ConsoleSerializer, ReviewSerializer
from rest_api.models import Tag, Article, Item, Game, Console, Review


# Create your views here.

@api_view(['GET'])
def get_tags(request):
    tags = Tag.objects.filter(is_popular=True)
    if 'num' in request.GET:
        num = int(request.GET['num'])
        tags = tags[:num]
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_article(request):
    id = int(request.GET['id'])
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ArticleSerializer(article)
    return Response(serializer.data)


@api_view(['GET'])
def get_articles(request):
    articles = Article.objects.all()
    if 'max_price' in request.GET:
        articles = articles.filter(total_price__lte=request.GET['max_price'])
    if 'min_price' in request.GET:
        articles = articles.filter(total_price__mte=request.GET['min_price'])
    if 'tags' in request.GET:
        tags = request.GET['tags'].split(',')  # Tag filter example: ws/articles?tags=New,Blizzard
        for tag in tags:
            articles = articles.filter(tag__name=tag)
    if 'seller' in request.GET:
        articles = articles.filter(seller_id=request.GET['seller'])
    if 'buyer' in request.GET:
        articles = articles.filter(buyer=request.GET['buyer'])
    if 'is_sold' in request.GET:
        articles = articles.filter(is_sold=request.GET['is_sold'])
    if 'console' in request.GET:
        articles = [a for a in articles if Game.objects.filter(pertaining_article=a.id, platform=request.GET['console']).exists()]
    if 'num' in request.GET:
        num = int(request.GET['num'])
        articles = articles[:num]
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_article(request):
    serializer = ArticleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_article(request):
    id = request.data['id']
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ArticleSerializer(article, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_article(request, id):
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    article.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_user(request):
    id = int(request.GET['id'])
    try:
        user = User.objects.get(id=id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    if 'num' in request.GET:
        num = int(request.GET['num'])
        users = users[:num]
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_item(request):
    id = int(request.GET['id'])
    try:
        item = Item.objects.get(id=id)
    except Item.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ItemSerializer(item)
    return Response(serializer.data)


@api_view(['GET'])
def get_items(request):
    items = Item.objects.all()
    if 'num' in request.GET:
        num = int(request.GET['num'])
        items = items[:num]
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_game(request):
    id = int(request.GET['id'])
    try:
        game = Game.objects.get(id=id)
    except Game.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = GameSerializer(game)
    return Response(serializer.data)


@api_view(['GET'])
def get_games(request):
    games = Game.objects.all()
    if 'num' in request.GET:
        num = int(request.GET['num'])
        games = games[:num]
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_game(request):
    serializer = GameSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_game(request):
    id = request.data['id']
    try:
        game = Game.objects.get(id=id)
    except Game.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = GameSerializer(game, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_game(request, id):
    try:
        game = Game.objects.get(id=id)
    except Game.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    game.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_console(request):
    id = int(request.GET['id'])
    try:
        console = Console.objects.get(id=id)
    except Console.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ConsoleSerializer(console)
    return Response(serializer.data)


@api_view(['GET'])
def get_consoles(request):
    consoles = Console.objects.all()
    if 'num' in request.GET:
        num = int(request.GET['num'])
        consoles = consoles[:num]
    serializer = ConsoleSerializer(consoles, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_console(request):
    serializer = ConsoleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_console(request):
    id = request.data['id']
    try:
        console = Console.objects.get(id=id)
    except Console.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ConsoleSerializer(console, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_console(request, id):
    try:
        console = Console.objects.get(id=id)
    except Console.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    console.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def get_review(request):
    id = int(request.GET['id'])
    try:
        review = Review.objects.get(id=id)
    except Review.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = ReviewSerializer(review)
    return Response(serializer.data)


@api_view(['GET'])
def get_reviews(request):
    reviews = Review.objects.all()
    if 'reviewer' in request.GET:
        reviews = reviews.filter(reviewer_id=request.GET['reviewer'])
    if 'reviewed' in request.GET:
        reviews = reviews.filter(reviewed_id=request.GET['reviewed'])
    if 'rate' in request.GET:
        reviews = reviews.filter(rate=request.GET['rate'])
    if 'num' in request.GET:
        num = int(request.GET['num'])
        reviews = reviews[:num]
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_review(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
