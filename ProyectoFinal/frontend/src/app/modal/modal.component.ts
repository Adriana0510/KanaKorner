import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}