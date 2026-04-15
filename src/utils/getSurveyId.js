export const getSurveyId = (profile) => {
  const survey = profile?.message?.survey;

  if (!survey) return null;

  if (Array.isArray(survey)) {
    return survey.length > 0 ? survey[0]?._id : null;
  }

  return survey?._id || null;
};