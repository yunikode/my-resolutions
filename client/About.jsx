import React, { Component } from 'react';

export default class About extends Component {

  setVar () {
    Session.set('Meteor.loginButtons.dropdownVisible', 'true')
  }

  render () {
    return (
      <div>
        <h1>About Us</h1>
        <p>I tētahi ahiahi, e whakareri ana a Māui me ōna tuākana i tētahi hāngi, hai hākari mā rātau. Kātahi anō ka mutu ake te whakawera i ngā kōhatu, ka tō te rā, ka pōuri rawa mō rātau. Ka hōhā a Māui ki te kai i ana kai i roto i te pōuri, ka tū a ia ki te mura o te ahi, ka kōrero atu ki tōna iwi.</p>

        <p>"Ia rā me tere tonu tātau ki te mahi i ā tātau mahi, ki te   rau ake i ā tātau kai i mua i te tōnga o te rā. He aha i pēnei ai tātau? Māku e hopu te rā i mua i tōna maranga ake, māku tonu e tohutohu te rā, kia āta haere noa tōna ara whakawhiti i te rangi!" Ā, tere tonu tētahi o ngā tuākana rā ki te whakapae atu, i runga i tōna kore whakapono ka oti i a Māui tēnei mahi. "He mahi uaua kē tēnā ki te hopu i te rā, he nui ake i ngā manu kua mau i a koe!" "Ka rongo koe i tōna wera, i ōna mura, ka mate rā koe," ka kī atu tētahi. "Te āhua nei kua pakapaka ōna whakaaro i te rā," te kī a tētahi atu, me tā rātau kata anō.</p>
        <button onClick={ this.setVar }>Sign Up</button>
      </div>
    )
  }
}
