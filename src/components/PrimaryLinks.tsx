import SparkleLink from "./SparkleLink";

const PrimaryLinks = () => {
  return (
    <div className="mb-6 flex items-center justify-center gap-6">
      <SparkleLink
        href="https://khandelwaldev.me"
        target="_blank"
        rel="noopener, noreferrer"
      >
        Portfolio
      </SparkleLink>
      <SparkleLink href="mailto:me@khandelwaldev.me">
        me@khandelwaldev.me
      </SparkleLink>
    </div>
  );
};

export default PrimaryLinks;
