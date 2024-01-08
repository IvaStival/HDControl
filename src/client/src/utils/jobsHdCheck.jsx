const jobsHdCheck = (id_hd, jobs) => {
  const result = jobs.map((job) => {
    return job.hdIds.includes(id_hd);
  });

  return result.reduce((a, b) => a + b, 0) ? true : false;
};

export { jobsHdCheck };
