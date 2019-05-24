from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets

from .models import Message, MessageSerializer


# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer


def get_proxies():
    data_provider = Connection(connection_string)
    result = data_provider.query_proxies('SELECT * FROM Proxies')
    return result


def authorize_voter(proxy, voter):
    key = RSA.generate(2048)
    private_key = voter.private_key
    message = str.encode(message)

    rsa_public_key = RSA.importKey(public_key)
    rsa_public_key = PKCS1_OAEP.new(rsa_public_key)
    encrypted_text = rsa_public_key.encrypt(message)

    if proxy.key == rsa_public_key:
        return True
    else:
        return False


def confirm_data(voter):
    if voter.is_data_accepted():
        return True
    else:
        return False


def get_candidates():
    data_provider = Connection(connection_string)
    result = data_provider.query_proxies('SELECT * FROM Candidates')
    return result


def vote(voter, candidate):
    data_provider = Connection(connection_string)
    result = data_provider.query_proxies(f'INSERT INTO Votes VALUES ({voter.id}, {candidate.id})')