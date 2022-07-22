'use babel';

import SlotGacorTerbaik2022 from '../lib/slot-gacor-terbaik-2022';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SlotGacorTerbaik2022', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('slot-gacor-terbaik-2022');
  });

  describe('when the slot-gacor-terbaik-2022:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.slot-gacor-terbaik-2022')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'slot-gacor-terbaik-2022:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.slot-gacor-terbaik-2022')).toExist();

        let slotGacorTerbaik2022Element = workspaceElement.querySelector('.slot-gacor-terbaik-2022');
        expect(slotGacorTerbaik2022Element).toExist();

        let slotGacorTerbaik2022Panel = atom.workspace.panelForItem(slotGacorTerbaik2022Element);
        expect(slotGacorTerbaik2022Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'slot-gacor-terbaik-2022:toggle');
        expect(slotGacorTerbaik2022Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.slot-gacor-terbaik-2022')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'slot-gacor-terbaik-2022:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let slotGacorTerbaik2022Element = workspaceElement.querySelector('.slot-gacor-terbaik-2022');
        expect(slotGacorTerbaik2022Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'slot-gacor-terbaik-2022:toggle');
        expect(slotGacorTerbaik2022Element).not.toBeVisible();
      });
    });
  });
});
