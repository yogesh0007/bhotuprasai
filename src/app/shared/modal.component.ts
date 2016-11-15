import {Component} from "@angular/core";
import {ModalModule} from "ng2-modal";

@Component({
    selector: "app",
    template: `
<div class="row">
    <button (click)="myModal.open()">open my modal</button>
    <modal #myModal>
        <modal-header>
            <h1>Modal header</h1>
        </modal-header>
        <modal-content>
            Hello Modal!
        </modal-content>
        <modal-footer>
            <button class="btn btn-primary" (click)="myModal.close()">close</button>
        </modal-footer>
    </modal>
</div>
    `
})
export class App {
  
}
