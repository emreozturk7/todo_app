
const denemeMail = "deneme@deneme.com";
const denemePassword = "deneme1234";

export const login = (email, password) => {

    if (denemeMail === email && denemePassword === password) {
        console.log("Login başarılı");
        return true;
    }
}