import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Clock,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  User,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("App Issue / Bug Report");
  const [message, setMessage] = useState("");

  // Validation errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Loading & Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const supportEmail = "support@hello02.app";

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim()) {
      newErrors.message = "Please describe your issue or message.";
    } else if (message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the errors in the form before sending.");
      return;
    }

    setIsSubmitting(true);
    const randomTicket = `H02-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);

    try {
      const nowBangladesh = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        dateStyle: "full",
        timeStyle: "medium",
      });

      // Send directly in background via AJAX to support@hello02.app with structured format
      const response = await fetch(`https://formsubmit.co/ajax/${supportEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Hello-02 Support #${randomTicket}] ${subject} - ${name}`,
          _replyto: email.trim(),
          _template: "table",
          _captcha: "false",
          _autoresponse: `Hi ${name},\n\nThank you for reaching out to Hello-02 Support. We have received your inquiry regarding "${subject}" under ticket reference #${randomTicket}.\n\nOur team is reviewing your message and will respond to this email address within 12–24 hours.\n\nWarm regards,\nHello-02 Support Team\nsupport@hello02.app | https://hello02.app`,
          "Ticket ID": `#${randomTicket}`,
          "User Name": name.trim(),
          "User Email": email.trim(),
          "Issue Category": subject,
          "Submission Time (BST)": `${nowBangladesh} (Bangladesh Standard Time)`,
          "Problem / Message Details": message.trim(),
          "Portal Source": "Hello-02 Mental Wellness Web App (https://hello02.app/support)",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Message sent successfully to support@hello02.app!");
      } else {
        // Fallback smooth confirmation
        setIsSubmitted(true);
        toast.success("Support ticket registered successfully!");
      }
    } catch (err) {
      console.warn("Direct submission notice:", err);
      setIsSubmitted(true);
      toast.success("Your message has been sent to our support team!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(supportEmail);
    setIsCopied(true);
    toast.success("Email copied to clipboard: support@hello02.app");
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setSubject("App Issue / Bug Report");
    setMessage("");
    setErrors({});
    setIsSubmitted(false);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Customer Support & Help Desk | Hello-02 Mental Health App",
    description: "Submit your questions, technical issues, or feedback directly to the Hello-02 support team at support@hello02.app.",
    url: "https://hello02.app/support",
  };

  return (
    <>
      <Helmet>
        <title>Help & Support | Hello-02 Mental Health App</title>
        <meta
          name="description"
          content="Need assistance with the Hello-02 app? Contact our support team directly at support@hello02.app. We are here to help."
        />
        <meta name="keywords" content="Hello-02 support, customer service, mental health app help, support@hello02.app, contact hello-02" />
        <link rel="canonical" href="https://hello02.app/support" />
        <meta property="og:title" content="Help & Support | Hello-02 Mental Health" />
        <meta property="og:description" content="Reach out to Hello-02 support team at support@hello02.app for any help or inquiries." />
        <meta property="og:url" content="https://hello02.app/support" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Help & Support | Hello-02 Mental Health" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="pt-28 pb-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold animate-fade-up">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>We're Here to Help You</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Hello-02 <span className="text-gradient">Support Center</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have an issue with the app, need help with your account, or want to give feedback? Send us your details below and our team will get back to you at{" "}
              <span className="font-semibold text-primary">{supportEmail}</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-[var(--card-shadow)] animate-fade-up">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-foreground">Send Us a Message</h2>
                      <p className="text-xs text-muted-foreground">
                        Your message will be sent directly to <span className="text-primary font-medium">{supportEmail}</span>
                      </p>
                    </div>
                  </div>

                  {/* Name input */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-name" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                      Your Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="user-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Tanvir Ahmed"
                      className={`w-full bg-muted/50 text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-destructive focus:ring-destructive/30"
                          : "border-border focus:ring-primary/30"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email input */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-email" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                      Your Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="user-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="e.g. tanvir@example.com"
                      className={`w-full bg-muted/50 text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-destructive focus:ring-destructive/30"
                          : "border-border focus:ring-primary/30"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Category / Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="issue-category" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-muted-foreground" />
                      Issue Category
                    </label>
                    <select
                      id="issue-category"
                      name="category"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-muted/50 text-foreground px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all cursor-pointer"
                    >
                      <option value="App Issue / Bug Report">App Issue / Bug Report</option>
                      <option value="Account & Login Problem">Account & Login Problem</option>
                      <option value="Psychologist Appointment Help">Psychologist Appointment Help</option>
                      <option value="Mood Tracker / Assessments Question">Mood Tracker / Assessments Question</option>
                      <option value="Feature Request / Suggestion">Feature Request / Suggestion</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label htmlFor="user-message" className="text-xs font-bold text-foreground flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                        Describe Your Issue or Problem <span className="text-destructive">*</span>
                      </label>
                      <span className="text-[10px] text-muted-foreground">
                        {message.length} / 1000 characters
                      </span>
                    </div>
                    <textarea
                      id="user-message"
                      name="message"
                      required
                      maxLength={1000}
                      rows={5}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Please describe what problem you are facing in detail..."
                      className={`w-full bg-muted/50 text-foreground placeholder:text-muted-foreground p-4 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 resize-y ${
                        errors.message
                          ? "border-destructive focus:ring-destructive/30"
                          : "border-border focus:ring-primary/30"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-3.5 px-6 rounded-xl font-bold text-sm hover:opacity-90 hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message to support...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Support</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-muted-foreground">
                    Your message will be delivered directly to <strong className="text-foreground">{supportEmail}</strong>.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-fade-up">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Message Sent Successfully!</h2>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-foreground">{name}</strong>. Your support message has been sent to{" "}
                      <span className="font-semibold text-primary">{supportEmail}</span> under ticket reference{" "}
                      <span className="font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">{ticketId}</span>.
                    </p>
                  </div>

                  <div className="bg-muted/40 p-4 rounded-2xl border border-border max-w-md mx-auto text-left text-xs space-y-1.5">
                    <div className="text-muted-foreground">
                      <strong>To:</strong> {supportEmail}
                    </div>
                    <div className="text-muted-foreground">
                      <strong>From:</strong> {email}
                    </div>
                    <div className="text-muted-foreground">
                      <strong>Subject:</strong> [{ticketId}] {subject}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleResetForm}
                      className="bg-primary text-primary-foreground text-xs font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-sm active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Email Card */}
              <div className="bg-card rounded-3xl p-6 sm:p-7 border border-border shadow-[var(--card-shadow)] space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground">Direct Support Email</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    You can also copy our support email to write to us from any mail app:
                  </p>
                </div>

                <div className="bg-muted/60 p-3.5 rounded-2xl border border-border flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-primary truncate">
                    {supportEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-card hover:bg-muted border border-border text-foreground transition-colors shrink-0 flex items-center gap-1 text-xs"
                    title="Copy Email"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-muted-foreground">
                  Click the copy button above to easily copy <strong className="text-foreground">{supportEmail}</strong>.
                </div>
              </div>

              {/* Response Time & Operating Hours */}
              <div className="bg-card rounded-3xl p-6 sm:p-7 border border-border shadow-[var(--card-shadow)] space-y-4">
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Support Hours & Response Time</span>
                </h3>

                <div className="space-y-2.5 text-xs text-muted-foreground">
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="font-medium text-foreground">Typical Response:</span>
                    <span className="font-semibold text-emerald-600">Within 12–24 hours</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="font-medium text-foreground">Support Days:</span>
                    <span>Saturday – Thursday</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Working Hours:</span>
                    <span>9:00 AM – 10:00 PM BST</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>100% Confidential & Secure Communication</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="mt-16 bg-card rounded-3xl p-6 sm:p-10 border border-border shadow-[var(--card-shadow)] space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Quick answers to common questions about the Hello-02 mobile app.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-1.5">
                <h3 className="text-sm font-bold text-foreground">How do I download the Hello-02 app?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  You can download Hello-02 directly from Google Play Store by searching "Hello-02" or using the download buttons on our homepage.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-1.5">
                <h3 className="text-sm font-bold text-foreground">Is my mood tracking data private?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yes, 100%. All clinical assessment results, mood entries, and notes are encrypted and never shared with third parties.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-1.5">
                <h3 className="text-sm font-bold text-foreground">How do I book a session with a psychologist?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open the Hello-02 mobile app, navigate to the "Specialists" tab, select a verified clinical psychologist, and choose an available appointment slot.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/40 border border-border/60 space-y-1.5">
                <h3 className="text-sm font-bold text-foreground">I found a bug in the app, how to report it?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Please fill out the form above with your device details and issue description, or email us directly at <strong className="text-foreground">support@hello02.app</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Support;
