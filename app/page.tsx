import AuthorBody from "./components/authorBody/AuthorBody";
import "@radix-ui/themes/styles.css";
import fetchEntries from "./utils/api/bookInfo";
import page from "./page.module.scss";

export default async function Home() {
  const data = await fetchEntries();

  if (!data) {
    return;
  }
  let fields: any = [];

  data.items.forEach((item: { fields: AuthorType }) => {
    fields.push(item.fields);
  });

  return (
    <div className={page.fullPage}>
      <div className={page.page}>
        <AuthorBody data={fields} />
      </div>
    </div>
  );
}
