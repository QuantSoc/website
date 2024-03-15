import RedirectButton from "components/RedirectButton"

function JobListing({ job }) {
    console.log(job.applicationsClose);
    //const Date = job.applicationsClose.toDate()

    return (
        <div>
            <br></br>
            <h2>{job.title}</h2>
            <p>{job.company} | {job.location}</p>
            {job.applicationsClose != undefined && <p><em>Applications close on {job.applicationsClose.toDate().getDate()}/
                                                                                {job.applicationsClose.toDate().getMonth() + 1}/
                                                                                {job.applicationsClose.toDate().getFullYear()}</em></p>}
            <p>{job.description}</p>
            <RedirectButton btnText="Apply" destination={job.link} />
        </div>
    )
}

export default JobListing