/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type NavItem = {
	title: string;
	label: string;
	href: string;
}

type Service = {
  title: string;
  description: string;
  image: string;
  details: string[];
  calLink: string;
}