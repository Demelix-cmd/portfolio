import { useState } from "react";

function Formulaire() {
    const [formData, setFormData] = useState({ prenom: "", nom: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function validate() {
        const errs = {};
        if (!formData.prenom.trim()) errs.prenom = "Le prénom est requis.";
        if (!formData.nom.trim()) errs.nom = "Le nom est requis.";
        if (!formData.email.trim()) errs.email = "L'email est requis.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Email invalide.";
        if (!formData.message.trim()) errs.message = "Le message est requis.";
        return errs;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const v = validate();
        setErrors(v);
        if (Object.keys(v).length > 0) return;
        // Simple fallback: open user's mail client via mailto: (replace recipient)
        const recipient = "demetech17@gmail.com";
        const subject = `Contact portfolio - ${formData.prenom} ${formData.nom}`;
        const body = `Email: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("Ouverture du client mail...");
        // trigger mail client
        window.location.href = mailto;
        // reset form after a short delay
        setTimeout(() => {
            setFormData({ prenom: "", nom: "", email: "", message: "" });
            setErrors({});
            setTimeout(() => setStatus(""), 2000);
        }, 500);
    }

    return (
        <section id="contact-form" className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-600 mb-4">Veuillez nous contacter pour collaborer sur un projet.</p>

            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <input
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded border px-3 py-2 ${errors.prenom ? 'border-red-500' : 'border-gray-300'}`}
                            aria-invalid={errors.prenom ? "true" : "false"}
                            aria-describedby={errors.prenom ? "err-prenom" : undefined}
                        />
                        {errors.prenom && <p id="err-prenom" className="text-red-600 text-sm mt-1">{errors.prenom}</p>}
                    </div>

                    <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded border px-3 py-2 ${errors.nom ? 'border-red-500' : 'border-gray-300'}`}
                            aria-invalid={errors.nom ? "true" : "false"}
                            aria-describedby={errors.nom ? "err-nom" : undefined}
                        />
                        {errors.nom && <p id="err-nom" className="text-red-600 text-sm mt-1">{errors.nom}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "err-email" : undefined}
                    />
                    {errors.email && <p id="err-email" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mt-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full rounded border px-3 py-2 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "err-message" : undefined}
                        placeholder="(Exemple) Je veux travailler avec vous sur tel projet"
                    />
                    {errors.message && <p id="err-message" className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="mt-4 flex items-center gap-3">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
                    {status && <p className="text-sm text-green-600">{status}</p>}
                </div>
            </form>
        </section>
    );
}

export default Formulaire;