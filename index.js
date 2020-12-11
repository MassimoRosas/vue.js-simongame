let vm = new Vue({
  el: '#app',
  data: {
    sequence: [],
    tmp: [],
    hautGauche: false,
    hautDroite: false,
    basGauche: false,
    basDroite: false,
    squareMapping: ["hautGauche", "hautDroite", "basGauche", "basDroite"]
  },
  computed: {
    score() {
      return (this.sequence.length) ? `Score : ${this.sequence.length - 1}` : `Score : 0`;
    }
  },
  methods: {
    newGame() {
      this.allGray();
      this.sequence = [];
      this.nextTurn();
    },
    nextTurn() {
      this.addNewElemToSequence();
      this.allGray();
      this.playSequence(this.tmp[0]);
    },
    allGray() {
      this.hautGauche = false;
      this.hautDroite = false,
        this.basGauche = false,
        this.basDroite = false
    },
    selectSquare(carre) {
      if (carre === this.tmp[0]) {
        vm[carre] = true;
        setTimeout(() => {
          this.allGray();
          this.tmp.shift();
          if (!this.tmp[0]) {
            this.nextTurn();
          }
        }, 400)
      } else {
        alert('Perdu!');
      }
    },
    addNewElemToSequence() {
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
      this.tmp = this.sequence.slice();
    },
    playSequence(carre) {
      setTimeout(() => {
        this[carre] = true;
        setTimeout(() => {
          this.allGray();
          this.tmp.shift();
          if (this.tmp[0]) {
            this.playSequence(this.tmp[0]);
          } else {
            this.tmp = this.sequence.slice();
          }
        }, 400);
      }, 400);
    }
  }
});