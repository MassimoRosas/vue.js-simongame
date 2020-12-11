let vm = new Vue({
  el: '#app',
  data: {
    hautGauche: false,
    hautDroite: false,
    basGauche: false,
    basDroite: false,
    sequence: [],
    tmp: [],
    squareMapping: ['hautGauche', 'hautDroite', 'basGauche', 'basDroite']
  },
  methods: {
    addNewElemToSequence(){
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
      this.tmp = this.sequence.slice();
    },
    allGray(){
      this.hautGauche = false,
      this.hautDroite = false,
      this.basGauche = false,
      this.basDroite = false
    },
    newGame(){
      this.sequence = [];
      this.nextTurn();
    },
    nextTurn(){
      this.addNewElemToSequence();
      this.allGray();
      this.playSequence(this.tmp[0]);
    },
    playSequence(instruction){
      this[instruction] = true;
      setTimeout(function(){
        vm.allGray();
        vm.tmp.shift();
        if (vm.tmp[0]) {
          setTimeout(function() {
            vm.playSequence(vm.tmp[0]);
          }, 400)
        } else {
          vm.tmp = vm.sequence.slice();
        }
      }, 400);
    },
    selectSquare(instruction){
      if (instruction === this.tmp[0]) {
        this[instruction] = true;
        setTimeout(function(){
          vm.allGray();
          vm.tmp.shift();
          if (!vm.tmp[0]){
            vm.nextTurn();
          }
        }, 400)
      } else {
        alert('Perdu !');
      }
    }
  }
})