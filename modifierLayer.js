class ModifierLayer {
  constructor(modifierCount) {
    this.modifiers = new Array(modifierCount);
    for (let modifier of this.modifiers) {
      modifier = new Modifier();
    }
  }
}
