import styles from "../styles/components/page-title.module.scss";

type PageTitleProps = {
  title: string;
  breadcrumbs: string;
};

const PageTitle = ({ title, breadcrumbs }: PageTitleProps) => {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.breadcrumbs}>{breadcrumbs}</p>
    </div>
  );
};

export default PageTitle;
