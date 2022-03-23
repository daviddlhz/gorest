import { HttpResponse, HttpStatusCode } from "@angular/common/http";
import { Component, ElementRef, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { userCreated, userDelete, userEdited } from "@core/constants/sweetalert.options";
import { IUserDto, SendUser } from "@domain/users/user.dto";
import { IUserRepository } from "@domain/users/user.repository";
import Swal from "sweetalert2";

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit { 

    @ViewChild('buttonCloseModal') buttonCloseModal!: ElementRef<HTMLButtonElement>;

    usersData!: IUserDto[];
    usersForm!: FormGroup;
    genders: string[] = ['male', 'female'];
    status: string[] = ['active', 'inactive'];
    deleteId!: number;

    constructor(
        @Inject('userRepository') private userService: IUserRepository,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.fetchUserData();
        this.buildCreateEditForm();
    }

    fetchUserData(): void {
        this.userService.getAll().subscribe (
            (response: HttpResponse<any>) => this.usersData = response.body
        );
    }

    buildCreateEditForm(): void {
        this.usersForm = this.formBuilder.group({
          id: [0],
          name: ['', [Validators.required, Validators.minLength(3)]],
          gender: ['', Validators.required],
          email: ['', Validators.required],
          status: ['', Validators.required]
        });
    }

    createUser(): void {
        this.userService.create(this.usersForm.value).subscribe((response: HttpResponse<SendUser>) => {
            if (response.status == HttpStatusCode.Created) {
                this.closeModal();
                Swal.fire(userCreated);
                this.fetchUserData();
            }
        })
    }

    modalWithUserData(user: IUserDto): void {
        this.usersForm.patchValue(user)
    }

    editUser(): void {
        this.userService.update(this.usersForm.value).subscribe((response: HttpResponse<IUserDto>) => {
            if (response.status == HttpStatusCode.Ok) {
                Swal.fire(userEdited);
                this.fetchUserData();
            }
        })
    }

    deleteUser(id: number): void {
        this.userService.delete(id).subscribe((response: HttpResponse<any>) => {
            if (response.status == HttpStatusCode.NoContent) {
                Swal.fire(userDelete);
                this.fetchUserData();
            }
        })
    }

    closeModal(): void {
        this.buttonCloseModal.nativeElement.click();
    }

    clearForm(): void {
        this.usersForm.reset();
    }

    selectDeleteId(id: number) {
        this.deleteId = id;
    }
}