let personName = '';

const complainMessage = () => alert('I told you not to do that ' + personName);

const typeAndScream = () => {
  document.getElementById('audio').play();
  personName = document.getElementById('name').value;
};

const goDark = () => {
  const body = document.getElementsByTagName('body')[0];
  body.className = body.className == '' ? 'dark' : '';
};

const finishTheStory = () =>
  (document.getElementById('story').innerHTML =
    'So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!');
