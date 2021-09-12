import { PostEntity } from 'src/entities/post.entity';
import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { getConnection } from 'typeorm';

export const rfcProcessing = ({ title, contents, id }) => {
  const value = `<?xml version="1.0" encoding="utf-8"?>
        <feed xmlns="http://www.w3.org/2005/Atom">
          <title>${title}</title>
          <link href="http://example.org/"/>
          <updated>2003-12-13T18:30:02Z</updated>
          <author>
            <name>${id}</name>
          </author>
          <id>${id}</id>
          <entry>
            <title>Atom-Powered Robots Run Amok</title>
            <link href="http://example.org/2003/12/13/atom03"/>
            <id>urn:uuid:1225c695-cfb8-4ebb-aaaa-80da344efa6a</id>
            <updated>2003-12-13T18:30:02Z</updated>
            <summary>${contents.substring(0, 4) + '...'}</summary>
          </entry>
        </feed>`;

  return value;
};
@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
  async createPost(
    title: string,
    contents: string,
    userId: number,
  ): Promise<boolean> {
    try {
      const rfc = rfcProcessing({
        title: title,
        contents: contents,
        id: userId,
      });

      await this.create({
        title: title,
        contents: contents,
        user: {
          id: userId,
        },
        rfc: rfc,
      }).save();

      return true;
    } catch (e) {
      console.log('allPost Error: ', e);
      return false;
    }
  }

  async updatePost(
    postId: number,
    title: string,
    contents: string,
  ): Promise<Boolean> {
    try {
      const rfc = rfcProcessing({
        title: title,
        contents: contents,
        id: postId,
      });
      //update 문
      await this.save({
        id: postId,
        title,
        contents,
        rfc: rfc,
      });

      return true;
    } catch (e) {
      console.log('✅ updatePost Error: ', e);
      return false;
    }
  }
}
