import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [OverlayModule, RouterLink, DialogModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // isOpen: boolean = false;
  // dialogOpen = signal<boolean>(true);
  // template!: TemplateRef<any>;
  // dialogRef!: DialogRef<any>;

  // constructor(private dialog: Dialog) {
  //   effect(() => {
  //     const isOpen = this.dialogOpen();

  //     console.log('this.dialogOpen', this.dialogOpen())
  //     console.log('this.dialogRef', this.dialogRef?.backdropClick)

  //     if (isOpen) {
  //       this.dialogRef = this.dialog.open(this.template, {
  //         panelClass: ['bg-white', 'rounded-lg', 'shadow-lg', 'p-6', 'mx-auto', 'w-4/5'],
  //         hasBackdrop: true
  //       });

  //       this.dialogRef.backdropClick.subscribe((data) => {
  //         console.log('data', data);
  //         this.closeDialog();
  //       });
  //     } else {
  //       this.dialog.closeAll();
  //     }
  //   });
  // }

  // setTemplate(template: TemplateRef<any>) {
  //   this.template = template;
  // }

  // toggleDialog() {
  //   this.isOpen = false;
  //   this.dialogOpen.update(value => !value);
  // }

  // closeDialog() {
  //   this.dialogOpen.set(false);
  // }

  isOpenMenu = signal(false);

  toggleMenu() {
    this.isOpenMenu.set(!this.isOpenMenu());
  }
}
