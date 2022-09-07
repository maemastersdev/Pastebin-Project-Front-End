export const baseUrl:string = process.env.NODE_ENV === "production"
	? "https://mae-sevgi-pastebin.herokuapp.com"
	: "http://localhost:4000"