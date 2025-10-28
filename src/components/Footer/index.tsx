import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = '中北大学--软件工程--张文杰';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '易接口',
          title: '易接口',
          href: 'https://github.com/okisno/xdqapi-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/okisno/xdqapi-backend',
          blankTarget: true,
        },
        {
          key: 'API开放平台',
          title: 'API开放平台',
          href: 'https://github.com/okisno/xdqapi-backend',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
