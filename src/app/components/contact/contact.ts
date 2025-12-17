import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

@Component({
	selector: 'app-contact',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './contact.html',
	styleUrl: './contact.scss',
})
export class Contact {
	contactForm: FormGroup;
	email = "dacostatimeo@gmail.com";

	socials: SocialLink[] = [
		{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/tim%C3%A9o-da-costa-078b15237/', icon: '/svg/icons/linkedin.svg' },
		{ name: 'GitHub', url: 'https://github.com/timeodacosta1707', icon: '/svg/icons/github.svg' },
		{ name: 'Instagram', url: 'https://instagram.com', icon: '/svg/icons/instagram.svg' }
	];

	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.contactForm.valid) {
			console.log(this.contactForm.value);
			this.contactForm.reset();
		}
	}
}