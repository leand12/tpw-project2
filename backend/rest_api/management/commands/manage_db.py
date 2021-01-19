from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from rest_api.models import Tag, Article, Game, Console, Item, Review, UserProfile


class Command(BaseCommand):
    help = 'This command programmatically manages the database'

    @classmethod
    def _add_tags(cls):
        Tag(name='Blizzard').save()
        Tag(name='Cheap', is_popular=True).save()
        Tag(name='New', is_popular=True).save()

    @classmethod
    def _del_tags(cls):
        Tag.objects.all().delete()

    @classmethod
    def _add_articles(cls):
        user = User.objects.get(id=1)
        t1 = Tag.objects.get(name='Blizzard')
        t2 = Tag.objects.get(name='New')
        a1 = Article(name='Artigo Teste', seller=user, total_price=20.00)
        a2 = Article(name='Artigo Teste2', seller=user, total_price=15.00)
        a3 = Article(name='Artigo Teste3', seller=user, total_price=10.00)
        a1.save()
        a2.save()
        a3.save()
        a1.tag.add(t1, t2)
        a1.shop_cart.add(user)
        a2.tag.add(t1)
        a2.saved.add(user)
        a3.tag.add(t2)
        a1.save()
        a2.save()
        a3.save()

    @classmethod
    def _del_articles(cls):
        Article.objects.all().delete()

    @classmethod
    def _add_items(cls):
        user = User.objects.get(id=1)
        a = Article(name='Artigo Teste4', seller=user, total_price=5.00)
        a.save()
        i1 = Game(name="Game1", rating='Everyone', pertaining_article=a, price=2.50, release_year=2010,
                  platform='Playstation').save()
        i2 = Console(name="Console1", pertaining_article=a, price=2.50, color='red', release_year=2009).save()
        a.save()

    @classmethod
    def _del_items(cls):
        Item.objects.all().delete()
        Game.objects.all().delete()
        Console.objects.all().delete()

    @classmethod
    def _add_reviews(cls):
        user1 = User.objects.get(id=1)
        user2 = User.objects.get(id=2)
        user3 = User.objects.get(id=3)
        Review(rate=3, description='good enough', reviewer=user2, reviewed=user1).save()
        r = Review(rate=3, description='great', reviewer=user1, reviewed=user3)
        r.save()

    @classmethod
    def _del_reviews(cls):
        Review.objects.all().delete()

    @classmethod
    def _add_profiles(cls):
        user = User.objects.get(id=1)
        profile = UserProfile(user=user, biography='Very good at games')
        profile.save()

    @classmethod
    def _del_profiles(cls):
        UserProfile.objects.all().delete()

    def add_arguments(self, parser):
        parser.add_argument(
            '-a', '--add', action='store_true',
            help='Update database with default data.',
        )
        parser.add_argument(
            '-d', '--delete', action='store_true',
            help='Delete all data from database.',
        )

    def handle(self, *args, **options):
        if options['delete']:
            self._del_tags()
            self._del_articles()
            self._del_items()
            self._del_reviews()
            self._del_profiles()
        if options['add']:
            self._add_tags()
            self._add_articles()
            self._add_items()
            self._add_reviews()
            self._add_profiles()
