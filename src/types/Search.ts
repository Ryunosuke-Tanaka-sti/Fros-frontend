type SearchResultType = {
  id: string;
  name: string;
};

export type SearchSkills = {
  user: SearchResultType;
  skills: string[];
};

export type SearchCertifications = {
  user: SearchResultType;
  certification: {
    name: string;
    expiration: string;
  };
};

export type SearchPrivileges = {
  user: SearchResultType;
  authority: string;
};

export type SearchUsers = {
  user: SearchResultType;
};
