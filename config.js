// إعدادات الموقع. الـ anon key مفتاح عام ومش سر، الحماية بتتم من قواعد قاعدة البيانات (RLS).
// ما تحطش هنا أبداً مفتاح service_role.
window.APP_CONFIG = {
  SUPABASE_URL: "https://hjrsjxwmlfzjcwfpggln.supabase.co/rest/v1/",
  SUPABASE_ANON_KEY: "sb_publishable_gNFeLsnGAxrz4u_K8RpjkA_F_pa8j5W",
  GOOGLE_LOGIN: false, // خليها true بعد ما تفعّل دخول Google من Supabase
  OWNER_LINKEDIN: "https://www.linkedin.com/in/saeidbary999/",
};
