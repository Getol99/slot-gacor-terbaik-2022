'use babel';

import SlotGacorTerbaik2022View from './slot-gacor-terbaik-2022-view';
import { CompositeDisposable } from 'atom';

export default {

  slotGacorTerbaik2022View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotGacorTerbaik2022View = new SlotGacorTerbaik2022View(state.slotGacorTerbaik2022ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotGacorTerbaik2022View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-gacor-terbaik-2022:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotGacorTerbaik2022View.destroy();
  },

  serialize() {
    return {
      slotGacorTerbaik2022ViewState: this.slotGacorTerbaik2022View.serialize()
    };
  },

  toggle() {
    console.log('SlotGacorTerbaik2022 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
