import Wrapper from "../../wrappers/CreateArticle";
import { ArticleModule } from "../../components/article modules";
import { useAppContext } from "../../context/appContext";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CreateArticle = () => {
  const { isEditing, article, editArticle } = useAppContext();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = article.modules;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    article.modules = items;
    editArticle({ article });
  };

  if (isEditing) {
    return (
      <Wrapper>
        <div className="article-content">
          <ArticleModule
            module={{
              moduleType: "title",
              title: article.title,
            }}
          />

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {article.modules.length > 0 &&
                    article.modules.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <div className={item.moduleType}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ArticleModule module={item} index={index}/>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </Wrapper>
    );
  }

  if (!isEditing) {
    return (
      <Wrapper>
        <div className="article-content">
          <ArticleModule
            module={{
              moduleType: "title",
            }}
          />
        </div>
      </Wrapper>
    );
  }
};
export default CreateArticle;
