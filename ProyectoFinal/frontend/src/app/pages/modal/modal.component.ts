import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="stopPropagation($event)">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() isOpen = false;

  closeModal() {
    this.isOpen = false;
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}

