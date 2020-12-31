from django.core.management.base import BaseCommand
from rest_api.models import Tag


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
        if options['add']:
            self._add_tags()
