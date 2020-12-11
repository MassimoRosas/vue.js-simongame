let vm = new Vue({
  el: '#app',
  data: {
    hautGauche: false,
    hautDroite: false,
    basGauche: false,
    basDroite: false,
    sequence: [],
    squareMapping: ['hautGauche', 'hautDroite', 'basGauche', 'basDroite']
  },
  methods: {
    addNewElemToSequence(){
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)])
    },
    newGame(){
      this.addNewElemToSequence();
    }
  }
})