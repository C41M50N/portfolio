/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type NavItem = {
	title: string;
	href: string;
	external?: boolean;
}

type Service = {
  title: string;
  description: string;
  image: string;
  details: string[];
  calLink: string;
}