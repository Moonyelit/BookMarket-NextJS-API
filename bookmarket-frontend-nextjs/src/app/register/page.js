"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthService from "@/services/auth-service";
import * as z from "zod";

// Schéma de validation
const registerSchema = z
  .object({
    lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    firstName: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères"),
    pseudo: z.string().min(2, "Le pseudo doit contenir au moins 2 caractères"),
    phone: z
      .string()
      .min(10, "Le téléphone doit contenir au moins 10 chiffres"),
    email: z.string().email("Adresse email invalide"),
    confirmEmail: z.string().email("Confirmation d'email invalide"),
    address: z.string(),
    zipcode: z.string(),
    country: z.string(),
    password: z
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Les emails ne correspondent pas",
    path: ["confirmEmail"],
  });

export default function RegisterPage() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      pseudo: "",
      phone: "",
      email: "",
      confirmEmail: "",
      address: "",
      zipcode: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    const payload = {
      email: data.email,
      last_name: data.lastName,
      first_name: data.firstName,
      pseudo: data.pseudo,
      phone_number: data.phone,
      isPro: false,
      password: data.password,
      roles: ["ROLE_USER"],
      id_adresses: 1,
      id_role: 1,
      name_compagny: null,
      id_adress_company: 0, // ⬅ remplace null par 0
      image: null,
      phone_company: null,
    };

    try {
      const response = await AuthService.register(payload);
      console.log("Réponse de l'API :", response);
      setSuccessMessage("✅ Inscription validée !");
      form.reset();
    } catch (error) {
      console.error("Erreur complète Axios :", error);

      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;

        if (status === 400 || status === 422) {
          // Cas de violations ou erreurs de validation renvoyées par Symfony / API Platform
          alert("⚠️ Erreur de validation : Vérifiez les informations saisies.");
          console.error("Détails :", data);
        } else if (status === 500 && data.detail?.includes("Duplicata")) {
          // Cas spécifique du doublon email
          alert("⚠️ Cet email est déjà utilisé !");
        } else {
          // Autres erreurs serveur
          alert("❌ Une erreur inattendue est survenue (code " + status + ")");
          console.error("Détails :", data);
        }
      } else if (error.request) {
        // Pas de réponse du serveur
        alert(
          "❌ Le serveur est injoignable. Vérifiez votre connexion ou réessayez plus tard."
        );
        console.error("Request :", error.request);
      } else {
        // Erreur avant l'envoi (mauvaise configuration axios, problème local)
        alert("❌ Une erreur locale est survenue : " + error.message);
        console.error("Erreur avant l'envoi de la requête :", error.message);
      }
    }
  };

  return (
    <main className="p-6 flex justify-center items-center min-h-screen">
      <div className="bg-[var(--color-brown)] p-8 rounded-3xl shadow-2xl w-full max-w-lg text-[var(--color-yellow)]">
        <h2 className="text-3xl font-bold mb-6 text-center [font-family:var(--font-rosarivo)]">
          Inscription
        </h2>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Prénom */}
          <div>
            <label>Prénom</label>
            <input
              {...form.register("firstName")}
              placeholder="Votre prénom"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.firstName?.message}</p>
          </div>

          {/* Nom */}
          <div>
            <label>Nom</label>
            <input
              {...form.register("lastName")}
              placeholder="Votre nom"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.lastName?.message}</p>
          </div>

          {/* Pseudo */}
          <div>
            <label>Pseudo</label>
            <input
              {...form.register("pseudo")}
              placeholder="Votre pseudo"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.pseudo?.message}</p>
          </div>

          {/* Téléphone */}
          <div>
            <label>Téléphone</label>
            <input
              {...form.register("phone")}
              placeholder="Numéro de téléphone"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.phone?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label>Email</label>
            <input
              {...form.register("email")}
              placeholder="Adresse email"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.email?.message}</p>
          </div>

          {/* Confirmation Email */}
          <div>
            <label>Confirmer l'email</label>
            <input
              {...form.register("confirmEmail")}
              placeholder="Confirmez votre email"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.confirmEmail?.message}</p>
          </div>

          {/* Adresse */}
          <div>
            <label>Adresse</label>
            <input
              {...form.register("address")}
              placeholder="Votre adresse"
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>

          {/* Code postal */}
          <div>
            <label>Code postal</label>
            <input
              {...form.register("zipcode")}
              placeholder="Code postal"
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>

          {/* Pays */}
          <div>
            <label>Pays</label>
            <input
              {...form.register("country")}
              placeholder="Pays"
              className="w-full p-2 rounded bg-white text-black"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label>Mot de passe</label>
            <input
              type="password"
              {...form.register("password")}
              placeholder="Mot de passe"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.password?.message}</p>
          </div>

          {/* Confirmation mot de passe */}
          <div>
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              {...form.register("confirmPassword")}
              placeholder="Confirmez le mot de passe"
              className="w-full p-2 rounded bg-white text-black"
            />
            <p>{form.formState.errors.confirmPassword?.message}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-yellow)] text-[var(--color-brown)] py-2 rounded transform transition-transform duration-200 hover:scale-105 active:scale-95 font-bold"
          >
            S'inscrire
          </button>

          {/* Message de succès */}
          {successMessage && (
            <p className="text-green-500 text-center mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </main>
  );
}
