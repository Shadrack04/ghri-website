export const paths = {
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    forget_password: "/auth/forgot-password",
    reset_password: "/auth/reset-password",
    verify_email: "/auth/verify-email",
  },

  public: {
    home: "/landing",
    about: "/about",
    services: "/services",
    privacy_policy: "/privacy-policy",
    community: "/community",
    faqs: "/faqs",
    contact_us: "/contact-us",
    blog: "/blog",
    careers: "/careers",
    referral_program: "/referral-program",
  },

  private: {
    home: "/home",
    tv_series: "/tv-series",
    watchlist: "/watchlist",
    new_arrivals: "/new-arrivals",
    upcoming: "/upcoming",
    avatars: "/avatars",
    select_movies: "/select-movies",

    account: {
      root: "/account",
      profile: "/account/profile",
    },
    movie: {
      root: "/movie",
      details: (id: string) => `${paths.private.movie.root}/${id}`,
      episode: (movieId: string, episodeId: string) =>
        `${paths.private.movie.root}/${movieId}/episode/${episodeId}`,
    },
  },
} as const;

export type PathsTypes = typeof paths;
